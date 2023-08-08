package karate.DemoQA.DemoQA_HomePage;

import com.intuit.karate.junit5.Karate;

public class TestRunner {
    @Karate.Test
    Karate getUITests(){
        return Karate.run().tags("@KarateTag").relativeTo(getClass());
    }
}
