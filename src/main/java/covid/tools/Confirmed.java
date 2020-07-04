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
    private HashMap<String, String> covidConfirmedMapInfo = new HashMap<String, String>();

    public HashMap<String, String> getCovidConfirmed() {
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
        this.keys.clear();
        this.info.clear();

        for(int i = 0; i < doc.getElementsByClass("ca_top").size();i++)
            this.keys.add(doc.getElementsByClass("ca_top").get(i).childNodes().get(0).toString().replace("\n", ""));
        
        this.info.add(doc.getElementsByClass("ca_value").get(0).childNodes().get(0).toString().replace("\n", "")
        +"("+doc.getElementsByClass("inner_value").get(0).childNodes().get(0).toString().replace("\n", "")+")");
        for(int i = 0 ; i< doc.getElementsByClass("txt_ntc").size();i++)
            this.info.add(doc.getElementsByClass("ca_value").get((i+1)*2).childNodes().get(0).toString().replace("\n", "")
            +"("+doc.getElementsByClass("txt_ntc").get(i).childNodes().get(0).toString().replace("\n", "")+")");
            
        for (int i = 0; i < info.size(); i++)
            covidConfirmedMapInfo.put(keys.get(i), info.get(i));
        covidConfirmedMapInfo.put("Date", date);
        return covidConfirmedMapInfo;
    }

    public String getConfirmedMapKeyInfo(int i) {
        return this.keys.get(i);
    }
}