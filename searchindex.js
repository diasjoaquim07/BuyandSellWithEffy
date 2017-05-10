// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Home", "home about nbsp us products mobile phones brand new nd hand laptops accessories contact buyandsellwitheffy phonesbrand and handget yourself or phone all our have been fully tested are working save massive deal on accessoriesbrand newbuyandsellwitheffy has wide selection of cell including cases chargers cables more you can shop by type accessory laptopsbrand handour reconditioning process is quite detailed thorough we endeavor to bring the back not just condition but better than ios android windows buyorsell copyright designed teamcodex ", "");
   this[database_length++] = new SearchPage("mobile2nd.html", "Mobile", "mobile home about nbsp us products phones nd hand brand new laptops accessories contact samsung s6 gb product condition phone comes with free case as well box buy j5 cracked screen missing button but works perfectly iphone and all lg l40 cover htc sony m2 the plus charger s3 z5 accesories copyright designed by teamcodex ", "");
   this[database_length++] = new SearchPage("mobileNew.html", "Mobile", "mobile home about nbsp us products phones nd hand brand new laptops accessories contact samsung s6 gb product condition phone comes sealed buy a7 j7 iphone s7 lg g6 huawei p9 a5 plus j3 alpha copyright designed by teamcodex ", "");
   this[database_length++] = new SearchPage("laptop2nd.html", "Laptop", "laptop home about nbsp us products mobile phones nd hand brand new laptops accessories contact dell inspiron product condition windows gb hdd ram intel core i5 buy hp probook lenovo thinkpad celeron fujitsu siemens i3 macbook pro macos vostro notebook copyright designed by teamcodex ", "");
   this[database_length++] = new SearchPage("laptopNew.html", "Laptop", "laptop home about nbsp us products mobile phones nd hand brand new laptops accessories contact hp folio product windows tb hdd gb ram intel core i7 buy notebook i5 dell inspiron asus zenbook ys02 rog gaming pc lenovo yoga ssd ds02 i3 copyright designed by teamcodex ", "");
   this[database_length++] = new SearchPage("Accessories.html", "Accessories", "accessories home about nbsp us products mobile phones nd hand brand new laptops contact car cellphone holder product buy iphone plus cover apple watch cable protector silicon case samsung earphones j5 copyright designed by teamcodex ", "");
   this[database_length++] = new SearchPage("Contact.html", "Contact", "contact home about nbsp us products mobile phones brand new nd hand laptops accessories university of namibiamain campuswindhoek pioniersparkbuyandsellwitheffy gmail com copyright designed by teamcodex ", "");
   this[database_length++] = new SearchPage("About.html", "About", "about home nbsp us products mobile phones brand new nd hand laptops accessories contact usmr effy sheehama is small start up entrepreneur who buys goods and then resells them for profit he deals in buying items as well mostly specializes the selling of electronic gadgets but flexible to sell other also takes orders from customers would like buy can’t find namibia because lot people tend be skeptical on online with sky rocketing prices mid range high end devices not everyone able afford product so why wait while you can come over at buyandsellwitheffy get yourself discount price mr owner copyright designed by teamcodex ", "");
   this[database_length++] = new SearchPage("Buying.html", "buying", "buying home about nbsp us products mobile phones brand new nd hand laptops accessories contact thanks for showing interest in our please fill the form and include your cellphone number we will get back to you shortly copyright designed by teamcodex ", "");
   return this;
}
