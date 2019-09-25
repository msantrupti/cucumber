package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "Feature\\tagdemo.Feature",tags= {"@SmokeTest","@FunctionalTest"})   //AND operation- both smoke and sanity will execute
public class Test2Runner {

}
