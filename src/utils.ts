
export class DateUtilities {

    /**
     * Format date
     */
    public static formatDate(date: Date, format: string = 'dd.MM.YYYY HH:mm'): string {

        var monthNames = [
            "января", "февраля", "марта",
            "апреля", "мая", "июня", "июля",
            "августа", "сентября", "октября",
            "ноября", "декабря"
        ];

        format = format.replace(/dd/g, DateUtilities.pad(date.getDate().toString(), 2));
        format = format.replace("MMMM", monthNames[date.getMonth()]);
        format = format.replace("MM", DateUtilities.pad((date.getMonth() + 1).toString(), 2));        
        format = format.replace("YYYY", date.getFullYear().toString());
        format = format.replace("HH", DateUtilities.pad(date.getHours().toString(), 2));
        format = format.replace("mm", DateUtilities.pad(date.getMinutes().toString(), 2));

        return format;//date.getFullYear() + "-" + DateUtilities.pad((date.getMonth() + 1).toString(), 2) + "-" + DateUtilities.pad(date.getDate().toString(), 2);
    }


    /**
     * Add zero before value if value.length < length
     */
    public static pad(value: string, length: number) {
        while (value.length < length)
            value = "0" + value;
        return value;
    }

}