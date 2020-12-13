package com.fofana23.todo.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {

    public static String dateToString(Date date){
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
        return dateFormat.format(date);
    }
}
