function isWalkValid(directions) {
    if (directions.length == 10) {
        let ewCounter = 0;
        let nsCounter = 0;

        for (let step of directions) {
            switch (step) {
                case 'e':
                    ewCounter++;
                    break;
                case 'w':
                    ewCounter--;
                    break;
                case 'n':
                    nsCounter++;
                    break;
                case 's':
                    nsCounter--;
                    break;
            }
        }

        return nsCounter == 0 && ewCounter == 0;
    } else {
        return false;
    }
}
