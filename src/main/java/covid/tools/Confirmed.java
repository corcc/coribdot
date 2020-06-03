package covid.tools;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class Confirmed {
    private Document doc;
    private String date;
    private ArrayList<String> info = new ArrayList<String>();
    private ArrayList<String> keys = new ArrayList<String>();
    private HashMap<String,String> covidConfirmedMapInfo = new HashMap<String,String>();
    public HashMap<String,String> getCovidConfirmed() {
        try {
            this.doc = Jsoup.connect("http://ncov.mohw.go.kr/en/bdBoardList.do").get();
        } catch (IOException e) {
            e.printStackTrace();
        }
        this.date = new Date().getYear() + 1900 + ".";
        for(int i = 1; i>=0;i--)
            this.date += doc.getElementsByClass("t_date")
                .select("span")
                .get(0)
                .toString()
                .replace("<span class=\"t_date\">(as of ", "")
                .replace("on ","")
                .replace(")</span>", "")
                .split(" ")[i];
        this.keys.clear();
        this.info.clear();
        for (int i = 1; i < doc.getElementsByClass("num").get(0).childNodes().get(5).childNodes().get(1).childNodes()
                .size(); i += 2)
            this.keys.add(doc.getElementsByClass("num").get(0).childNodes().get(5).childNodes().get(1).childNodes()
                    .get(i).childNodes().get(0).toString());
        for (int i = 1; i < doc.getElementsByClass("num").get(0).childNodes().get(7).childNodes().get(1).childNodes()
                .size(); i += 4)
            this.info.add(doc.getElementsByClass("num").get(0).childNodes().get(7).childNodes().get(1).childNodes()
                    .get(i).childNodes().get(0).toString());
        for (int i = 0; i < info.size(); i++)
            covidConfirmedMapInfo.put(keys.get(i), info.get(i));
        covidConfirmedMapInfo.put("Date",date);
        return covidConfirmedMapInfo;
    }
    public String getConfirmedMapKeyInfo(int i){
        return this.keys.get(i);
    }
}