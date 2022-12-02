package com.karate.databaseManager.dseManager.objects.table_data;

public class DATASTAX_Table_Data {
    String TRUSTSTORE_PASS, DATACENTER, DATASTAX_HOST;




    public String getTRUSTSTORE_PASS() {
        return TRUSTSTORE_PASS;
    }

    public void setTRUSTSTORE_PASS(String TRUSTSTORE_PASS) {
        this.TRUSTSTORE_PASS = TRUSTSTORE_PASS;
    }

    public String getDATACENTER() {
        return DATACENTER;
    }

    public void setDATACENTER(String DATACENTER) {
        this.DATACENTER = DATACENTER;
    }

    public String getDATASTAX_HOST() {
        return DATASTAX_HOST;
    }

    public void setDATASTAX_HOST(String DATASTAX_HOST) {
        this.DATASTAX_HOST = DATASTAX_HOST;
    }
}
