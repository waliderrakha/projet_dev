package ehtp.pfe.secservice.secr;

public class JWTUtil {
    public static final String SECRET="mySecret1234";
    public static final String AUTH_HEADER="Authorization";
    public static final long EXPIRE_ACCES_TOKEN=86400000;

    public static final long EXPIRE_REFRESH_TOKEN =259200000;
    public static final String PREFIX ="Bearer " ;
}
