function setCookie(key, value, expiry) { //Using cookies to store the previously selected language
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000)); //Sets the expiry date for the cookie
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
  }

function googleTranslateElementInit() { //The cookie part of the code doesn't work ༼ ༎ຶ ෴ ༎ຶ༽
    var currentLanguage = document.getElementById("goog-te-combo") //This is meant to nab the currently selected option in the translate dropdown
    setCookie('googtrans', '/en/' + currentLanguage,1); //The key is for the jQuery, the value is the english to [selected language] and 1 is a default for the expiry
    new google.translate.TranslateElement(
        {pageLanguage: 'en'}, //Sets what the page langauge will be translating from
        'google_translate_element'
    );
}