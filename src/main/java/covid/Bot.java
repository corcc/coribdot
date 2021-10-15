package covid;

import java.util.ArrayList;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

class Bot extends TelegramLongPollingBot {
    static String botTokenString = "";
    
    // public static void main(String[] args) {
    //     botTokenString = args[0];
    //     ApiContextInitializer.init();
    //     TelegramBotsApi telegramBotsApi = new TelegramBotsApi();
    //     Bot bot = new Bot();
    //     try {
    //         telegramBotsApi.registerBot(bot);
    //     } catch (TelegramApiException e) {
    //         e.printStackTrace();
    //     }
    // }
    public static void main(String[] args) {
        botTokenString = args[0];
        try {
            TelegramBotsApi telegramBotsApi = new TelegramBotsApi(DefaultBotSession.class);
            telegramBotsApi.registerBot(new Bot());
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onUpdateReceived(Update u) {
        ArrayList<String> text = new ArrayList<>();
        text.add(u.getMessage().getText());
        while (text.toString().contains("  "))
            text.set(0, text.get(0).replace("  ", " "));
        if (text.get(0).indexOf("/covid_kr_confirmed_cases") == 0)
            sendConfirmed(u);
        if (text.get(0).indexOf("/covid_kr_testing_in_korea") == 0)
            sendTestingInKorea(u);
        if (text.get(0).indexOf("/covid_kr_vaccinated_status") == 0)
            sendVaccinatedStatus(u);
    }

    @Override
    public String getBotUsername() {
        return "COVIDKoreaBOT";
    }

    @Override
    public String getBotToken() {
        return botTokenString;
    }

    void sendVaccinatedStatus(Update u) {
        try {
            execute(covid.Message.vaccine.openapi.VaccinatedStatus.getSendMessage(u));
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    void sendConfirmed(Update u) {
        try {
            execute(covid.Message.test.Confirmed.getSendMessage(u));
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    void sendTestingInKorea(Update u) {

        try {
            execute(covid.Message.test.Testing.getSendMessage(u));
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }
}
