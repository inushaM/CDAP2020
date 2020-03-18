package com.cdap_2020_027.elearning.model;

/**
 *
 * @author IT17119122
 */
public class CommonResponse {
    private String responseCode;
    private String responseText;

    public CommonResponse() {
    }

    public CommonResponse(String responseCode, String responseText) {
        this.responseCode = responseCode;
        this.responseText = responseText;
    }

    public String getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(String responseCode) {
        this.responseCode = responseCode;
    }

    public String getResponseText() {
        return responseText;
    }

    public void setResponseText(String responseText) {
        this.responseText = responseText;
    }
}
