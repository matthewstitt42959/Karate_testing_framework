package com.karate.databaseManager.dseManager.objects.table_data;

public class DBPersonnalData {
    static String SSO_USERNAME, SSO_PASSWORD;

    public static String getSSO_USERNAME() {
        return SSO_USERNAME;
    }

    public void setSSO_USERNAME(String SSO_USERNAME) {
        this.SSO_USERNAME = SSO_USERNAME;
    }

    public static String getSSO_PASSWORD() {
        return SSO_PASSWORD;
    }

    public void setSSO_PASSWORD(String SSO_PASSWORD) {
        this.SSO_PASSWORD = SSO_PASSWORD;
    }
}
