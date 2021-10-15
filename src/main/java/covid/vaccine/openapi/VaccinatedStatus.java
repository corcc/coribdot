package covid.vaccine.openapi;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.jsoup.Jsoup;
import org.jsoup.Connection.Method;
import org.jsoup.Connection.Response;

/**
 * https://www.data.go.kr/data/15078166/openapi.do GET Vaccinated Stats by use
 * OpenAPI from https://nip.kdca.go.kr/irgd/cov19stats.do?list=all : XML
 * https://ncv.kdca.go.kr/eng/
 */

public class VaccinatedStatus extends Object {
    /**
     * https://ncv.kdca.go.kr/eng/
     * 
     * @firstCnt "First Dose Administered"
     * @secondCnt "Fully Vaccinated"
     * @thirdCnt "Booster Dose Administered"
     */

    private String OpenAPIUrl = "https://nip.kdca.go.kr/irgd/cov19stats.do";
    private Response response = getDataFromOpenAPI();
    java.util.Date dateTime = parseTime();

    private Response getDataFromOpenAPI() {
        try {
            return Jsoup.connect(OpenAPIUrl).method(Method.GET).execute();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return response;
    }

    private java.util.Date parseTime() {
        try {
            return new SimpleDateFormat("zzz;yyyy.MM.dd HH:mm:ss")
                    .parse("KST;" + (Jsoup.parse(response.body()).getElementsByTag("dataTime").text()));
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return dateTime;
    }

    public class Cnt extends Object {
        Cnt(String tagName) {
            Jsoup.parse(response.body()).getElementsByTag(tagName).forEach((a) -> {
                String tpcd = a.parent().getElementsByTag("tpcd").text().replaceAll("[^a-zA-Z]", "");
                switch (tpcd.charAt(0)) {
                    case 'A':
                        this.byDays.inToday = a.text();
                        break;
                    case 'B':
                        this.byDays.total.onYesterday = a.text();
                        break;
                    case 'C':
                        this.byDays.total.onToday = a.text();
                        break;
                }
            });
        }

        public class Vaccinated extends Object {

            public String inToday = new String();

            public class Total extends Object {
                public String onToday = new String();
                public String onYesterday = new String();
            }

            public Total total = new Total();
        }

        public Vaccinated byDays = new Vaccinated();
    }

    public Cnt firstCnt = new Cnt("firstCnt");
    public Cnt secondCnt = new Cnt("secondCnt");
    public Cnt thirdCnt = new Cnt("thirdCnt");
}