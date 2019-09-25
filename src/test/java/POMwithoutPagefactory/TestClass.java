package POMwithoutPagefactory;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;
@Test

public class TestClass {

	public static void main (String args[])
	{System.setProperty("webdriver.chrome.driver", "C:\\Users\\Training_b6b.01.16\\Desktop\\BrowerDrivers santrupti\\chromedriver.exe");
	WebDriver driver=new ChromeDriver();
	driver.get("http://demowebshop.tricentis.com/");
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	pageClass locateElements=PageFactory.initElements(driver, pageClass.class);
	locateElements.loginMethod("sambhramalokanath013@gmail.com", "Sambhrama009");
	}
}
