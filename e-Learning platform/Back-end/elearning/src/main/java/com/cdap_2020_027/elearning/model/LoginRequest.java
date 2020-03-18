package com.cdap_2020_027.elearning.model;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
public class LoginRequest {
   
   private String username;
   private String password;

   public LoginRequest(String username, String password) {
       this.username = username;
       this.password = password;
   }

   public LoginRequest() {
   }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

   public String getPassword() {
       return password;
   }

   public void setPassword(String password) {
       this.password = password;
   }
}
