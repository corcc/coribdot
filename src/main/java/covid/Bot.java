package covid;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;

import org.telegram.telegrambots.ApiContextInitializer;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;


import covid.tools.Confirmed;
import covid.tools.Testing;

class Bot extends TelegramLongPollingBot {
    Testing testing = new Testing();
    Confirmed confirmed = new Confirmed();
    String msg = "";
    HashMap<String, String> confirmedMap = new HashMap<>();
    HashMap<String, String> testingMap = new HashMap<>();
    static String botTokenString = "";

    public static void main(String[] args) {
        botTokenString = args[0];
        ApiContextInitializer.init();
        TelegramBotsApi telegramBotsApi = new TelegramBotsApi();
        Bot bot = new Bot();
        try {
            telegramBotsApi.registerBot(bot);
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onUpdateReceived(Update update) {
        ArrayList<String> text = new ArrayList<>();
        text.add(update.getMessage().getText());
        while (text.toString().contains("  "))
            text.set(0, text.get(0).replace("  ", " "));
        if (text.get(0).indexOf("/covid_kr_confirmed_cases") == 0)
            sendConfirmed(update);
        else if (text.get(0).indexOf("/covid_kr_testing_in_korea") == 0)
            sendTestingInKorea(update);
    }

    @Override
    public String getBotUsername() {
        return "COVIDKoreaBOT";
    }

    @Override
    public String getBotToken() {
        return botTokenString;
    }

    void sendConfirmed(Update update) {
        long chatId = update.getMessage().getChatId();
        confirmedMap = confirmed.getCovidConfirmed();
        msg = "";
        for (int i = 0; i < confirmedMap.size() - 1; i++) {
            msg += confirmed.getConfirmedMapKeyInfo(i) + " : "
                    + confirmedMap.get(confirmed.getConfirmedMapKeyInfo(i)) + "\n";
        }
        msg += "Date : " + confirmedMap.get("Date") + " (KST)\n"
                + "from : http://ncov.mohw.go.kr/en/bdBoardList.do";
        SendMessage sendMessage = new SendMessage().setChatId(chatId).setText(msg);
        try {
            execute(sendMessage);
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    void sendTestingInKorea(Update update){
        long chatId = update.getMessage().getChatId();
        testingMap = testing.getCovidTesting();
        msg = "";
        for (int i = 0; i < testingMap.size() - 1; i++) {
            msg += testing.getTestingMapKeyInfo(i) + " : "
                    + testingMap.get(testing.getTestingMapKeyInfo(i)) + "\n";
        }
        msg += "Date : " + testingMap.get("Date") + " (KST)\n"
                + "from : http://ncov.mohw.go.kr/en/bdBoardList.do";
        SendMessage sendMessage = new SendMessage().setChatId(chatId).setText(msg);
        try {
            execute(sendMessage);
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }
}
