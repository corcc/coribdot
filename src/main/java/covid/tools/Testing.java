package covid.tools;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import java.util.Date;

public class Testing {
    private Document doc;
    private String date;
    private ArrayList<String> info = new ArrayList<String>();
    private ArrayList<String> keys = new ArrayList<>();
    private HashMap<String, String> covidTestingMapInfo = new HashMap<String, String>();

    public HashMap<String, String> getCovidTesting() {
        try {
            this.doc = Jsoup.connect("http://ncov.mohw.go.kr/en/bdBoardList.do").get();
        } catch (IOException e) {
            e.printStackTrace();
        }
        this.date = new Date().getYear() + 1900 + ".";
        for (int i = 1; i >= 0; i--)
            this.date += doc.getElementsByClass("t_date").select("span").get(0).toString()
                    .replace("<span class=\"t_date\">(as of ", "").replace("on ", "").replace(")</span>", "")
                    .split(" ")[i];

        this.info.clear();
        Collections.addAll(this.info,
                (doc.getElementsByClass("minisize").select("tbody tr").get(0).parentNode().toString())
                        .replace("<tbody>", "").replace("<tr>", "").replace("<td>", "").replace("</tr>", "")
                        .replace("</tbody>", "").replace("\n", "").replace(" ", "").split("</td>"));
        this.keys.clear();
        for (int j = 5; j > 0 && j < doc.getElementsByClass("minisize").get(0).childNodes().size(); j -= 2)
            for (int i = 1; i < doc.getElementsByClass("minisize").get(0).childNodes().get(5).childNodes().get(j)
                    .childNodes().size(); i += 2)
                if (doc.getElementsByClass("minisize").get(0).childNodes().get(5).childNodes().get(j).childNodes()
                        .get(i).attributes().hasKey("colspan"))
                    continue;
                else
                    this.keys.add(doc.getElementsByClass("minisize").get(0).childNodes().get(5).childNodes().get(j)
                            .childNodes().get(i).childNodes().get(0).toString());
        for (int i = 0; i < this.info.size(); i++)
            try {
                if (this.keys.get(i).contains("Subtotal"))
                    throw new Exception();
            } catch (Exception e) {
                this.keys.remove(i);
                this.info.remove(i);
            } finally {
                covidTestingMapInfo.put(this.keys.get(i), this.info.get(i));
            }
        covidTestingMapInfo.put("Date", date);
        return covidTestingMapInfo;
    }

    public String getTestingMapKeyInfo(int i) {
        return this.keys.get(i);
    }
}