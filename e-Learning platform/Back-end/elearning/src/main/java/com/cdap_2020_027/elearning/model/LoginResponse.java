package com.cdap_2020_027.elearning.model;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
public class LoginResponse {
   
   private String responseCode;
   private String responseMessage;
   private String type;
   private Object systemUser;
   
   public LoginResponse(String responseCode, String responseMessage, String type , Object systemUser) {
       this.responseCode = responseCode;
       this.responseMessage = responseMessage;
       this.systemUser = systemUser;
       this.type = type;
   }

   public LoginResponse() {
   }

   public String getResponseCode() {
       return responseCode;
   }

   public void setResponseCode(String responseCode) {
       this.responseCode = responseCode;
   }

   public String getResponseMessage() {
       return responseMessage;
   }

   public void setResponseMessage(String responseMessage) {
       this.responseMessage = responseMessage;
   }
   
   public Object getSystemUser() {
       return systemUser;
   }

   public void setSystemUser(Object systemUser) {
       this.systemUser = systemUser;
   }

   public String getType() {
	   return type;
   }

   public void setType(String type) {
	   this.type = type;
   }
}
