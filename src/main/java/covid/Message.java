package covid;

import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import java.util.HashMap;

public class Message {
    static class test {
        static class Confirmed {
            static SendMessage getSendMessage(Update u) {
                covid.test.Confirmed c = new covid.test.Confirmed();
                HashMap<String, String> cm = c.getCovidConfirmed();
                String m = "";
                for (int i = 0; i < cm.size() - 1; i++) {
                    m += c.getConfirmedMapKeyInfo(i) + " : " + cm.get(c.getConfirmedMapKeyInfo(i)) + "\n";
                }
                m += "Date : " + cm.get("Date") + " \n" + "from : http://ncov.mohw.go.kr/en/bdBoardList.do";
                return new SendMessage(u.getMessage().getChat().getId()+"",m){{
                    setReplyToMessageId(u.getMessage().getMessageId());
                }};
            }
        }

        static class Testing {
            static SendMessage getSendMessage(Update u) {
                covid.test.Testing t = new covid.test.Testing();
                HashMap<String, String> tm = t.getCovidTesting();
                String m = "";
                for (int i = 0; i < tm.size() - 1; i++) {
                    m += t.getTestingMapKeyInfo(i) + " : " + tm.get(t.getTestingMapKeyInfo(i)) + "\n";
                }
                m += "Date : " + tm.get("Date") + " \n" + "from : http://ncov.mohw.go.kr/en/bdBoardList.do";
                return new SendMessage(u.getMessage().getChat().getId()+"",m){{
                    setReplyToMessageId(u.getMessage().getMessageId());
                }};
            }
        }
    }

    static class vaccine {
        static class openapi {
            static class VaccinatedStatus {
                static SendMessage getSendMessage(Update u) {
                    covid.vaccine.openapi.VaccinatedStatus vs = new covid.vaccine.openapi.VaccinatedStatus();

                    String m = "'First Dose Administered':{\n" + "'today':" + vs.firstCnt.byDays.inToday + ",\n"
                            + "'total':{\n" + "'today':" + vs.firstCnt.byDays.total.onToday + ",\n" + "'yesterday':"
                            + vs.firstCnt.byDays.total.onYesterday + "\n" + "}},'Fully Vaccinated':{\n" + "'today':"
                            + vs.secondCnt.byDays.inToday + ",\n" + "'total':{\n" + "'today':"
                            + vs.secondCnt.byDays.total.onToday + ",\n" + "'yesterday':"
                            + vs.secondCnt.byDays.total.onYesterday + ",\n" + "}},'Booster Dose Administered':{\n"
                            + "'today':" + vs.thirdCnt.byDays.inToday + ",\n" + "'total':{\n" + "'today':"
                            + vs.thirdCnt.byDays.total.onToday + ",\n" + "'yesterday':"
                            + vs.thirdCnt.byDays.total.onYesterday + ",\n" + "}};";
                            return new SendMessage(u.getMessage().getChat().getId()+"",m){{
                                setReplyToMessageId(u.getMessage().getMessageId());
                            }};
                }
            }
        }
    }
}
