package com.project.step_definitions;

import com.project.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setUp(){
        Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

    }

    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){

            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot,"image/png","screenshot");
        }
        Driver.closeDriver();
    }
}
