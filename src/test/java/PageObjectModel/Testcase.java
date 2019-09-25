package PageObjectModel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Testcase {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Training_b6b.01.16\\Desktop\\BrowerDrivers santrupti\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		page PObject = new page(driver);
		driver.get("http://demowebshop.tricentis.com/");
		driver.manage().window().maximize();
		PObject.clicklink();
		String username=null;
		PObject.typeuname(username);
		String password = null;
		PObject.typepassword(password);
		PObject.clickonloginlyn();
		System.out.println("title of the page is "+driver.getTitle());
		PObject.clicklinkout();
	}

}
