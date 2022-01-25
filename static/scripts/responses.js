function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there! Type Tell me about your services, to know the treatements which we do! ";
    }
    else if (input == "Tell me about your services") {
        return "Following are the services on which we provide consultancy : 1. Dry cough ; 2. Wet cough ; 3. Eye ache ; 5. Headache"

    } else if (input=="Dry cough"){
        return "Take the following medicines:    1. Dabur Honitus - Standard dose : 2 tsp every 6 hours ; 2. Robitussin Maximum Strength - Standard dose : 20 mL after every 4 hours. ;   3. Sudafed - Standard dose : One 30 mg tablet after every 4-6 hours";

    } else if (input=="Wet cough"){
        return "Take the following medicines:    1. Bromhexine - Standard dose : 8mg thrice a day ; 2. Ambroxol - Standard dose : 15-30 mg thrice a day ;   3. Acetylcysteine - Standard dose : 1 or 2 ml solution of 200mg/ml injectable solution may be nebulizsed/instilled through the trachiostomy tube";
    
    } else if (input=="Eye ache"){
        return "Take the following medicines:    1.TheraTears Eye Drops ; 2.Bausch & Lomb Opcon-A Eye Drops ;  3. Refresh Tears Lubricant Eye Drops";   }

    else if (input=="Head ache"){
        return "Take the following medicines:    1. Paracetamol ; 2.Aspirin ;  3. Saridon";   }
    
    else if (input=="bye")
        return "Bye and have a great day! Hope me consultancy helped or will help you!"
    
    }