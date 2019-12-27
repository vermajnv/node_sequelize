class InterestCalculator {
    constructor() {
        
    }
    
    getPrinciple(fn)
    {
        fn(400);
    }
    
    getRate(fn)
    {
        fn(9);
    }
    
    getTime(fn)
    {
        fn(1);
    }
    
    computeInterest(principle, rate, time, fn)
    {
        fn((principle * rate * time) / 100);
    }
    
}

let interestCalculator = new InterestCalculator();

interestCalculator.getPrinciple((principle) => {
    interestCalculator.getRate((rate) => {
        interestCalculator.getTime((time) => {
            interestCalculator.computeInterest(principle, rate, time, (interest) => {
                console.log(interest);
            })
        })
    })
});
