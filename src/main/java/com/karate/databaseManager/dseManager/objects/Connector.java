package com.karate.databaseManager.dseManager.objects;

public class Connector {
    /**
     private static Connection conn;
    private static CqlSession session;
    int port = 9091;
    DATASTAX_Table_Data table_data = new DATASTAX_Table_Data();

    String trustStorePassword = table_data.getTRUSTSTORE_PASS();
    String datacenter = table_data.getDATACENTER();
    String host = table_data.getDATASTAX_HOST();
    private SSLContext sslcontent;
    private String key = "key.jks";

    public Connector(String keyspace, String env) throws IOException, ClassNotFoundException {
        if (env.equals("sys")) {
            getDSEConnection_SYS(keyspace);

        } else if (env.equals("dev")) {
            getDSEConnection_DEV(keyspace);
        }
    }

    public CqlSession getDSEConnection_DEV(String keyspace) throws IOException {
      try {
            char[] pwd = trustStorePassword.toCharArray();
            sslcontent = SSLContextBuilder
                    .create()
                    .loadTrustMaterial(ResourcesUtils.getFile("C://Users//Matthew.Stitt//Documents//drivers//key.jks"), pwd)
                    .build();
            try {
                session = CqlSession.builder()
                        .addContactPoint(new InetSocketAddress("hostname", 01))
                        .addContactPoint(new InetSocketAddress("hostname", 01))
                        .addContactPoint(new InetSocketAddress("hostname", 01))
                        .addContactPoint(new InetSocketAddress("hostname", 01))
                        .withSslContext(sslcontent)
                        .withAuthCredentials(DBPersonnalData.getSSO_USERNAME(), DBPersonnalData.getSSO_PASSWORD())
                        .withLocalDatacenter("DataCenterName")
                        .withKeyspace(keyspace)
                        .build();
            } catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println("DataStax" + " database connected!");
        } catch (KeyManagementException | NoSuchAlgorithmException | KeyStoreException |
                 CertificateEncodingException e) {
            throw new IllegalStateException("Cannot connect to the database", e);
        }
        setSession(session);
        return session;
    }

    public CqlSession getDSEConnection_SYS(String keyspace) throws IOException {
        try {
            char[] pwd = trustStorePassword.toCharArray();
            sslcontent = SSLContextBuilder
                    .create()
                    .loadTrustMaterial(ResourcesUtils.getFile("C://Users//Matthew.Stitt//Documents//drivers//key.jks"), pwd)
                    .build();
            try {
                session = CqlSession.builder()
                        .addContactPoint(new InetSocketAddress("hostname", 01))
                        .addContactPoint(new InetSocketAddress("hostname", 01))
                        .addContactPoint(new InetSocketAddress("hostname", 01))
                        .addContactPoint(new InetSocketAddress("hostname", 01))
                        .withSslContext(sslcontent)
                        .withAuthCredentials(DBPersonnalData.getSSO_USERNAME(), DBPersonnalData.getSSO_PASSWORD())
                        .withLocalDatacenter("DataCenterName")
                        .withKeyspace(keyspace)
                        .build();
            } catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println("DataStax" + " database connected!");
        } catch (KeyManagementException | NoSuchAlgorithmException | KeyStoreException |
                 CertificateEncodingException e) {
            throw new IllegalStateException("Cannot connect to the database", e);
        }
        setSession(session);
        return session;
    }

    public void CloseConnection(Connection conn) throws SQLException {
        conn.close();
        try{
            conn.getMetaData();

        } catch (Exception e) {
            System.out.println("Connection is closed");
        }
    }
    public void CloseSession(CqlSession session) throws SQLException {
        session.close();
        try{
            session.getMetadata();

        }catch (Exception e){
            System.out.println("Connection is closed.");
        }
    }

    public Connection getConn() { return conn; }
    public void setConn(Connection conn) {Connector.conn = conn; }

    public static CqlSession getSession() {
        return session;
    }

    public static void setSession(CqlSession session) {
        Connector.session = session;
    }
     **/
}
