const humanReadable = seconds => {
    /**
     Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

        HH = hours, padded to 2 digits, range: 00 - 99
        MM = minutes, padded to 2 digits, range: 00 - 59
        SS = seconds, padded to 2 digits, range: 00 - 59
        The maximum time never exceeds 359999 (99:59:59)
        describe('examples', function() {
        it('should format correctly', function() {
            Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
            Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
            Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
            Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
            Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
        });
        });

        You can find some examples in the test fixtures.
     */     
    let minutes = 60, hours = 0, oneHourInSeconds = 3600, gauge = 0
        gauge = ( seconds / oneHourInSeconds ) * minutes 
        // console.log( gauge > 60 ? gauge - 60 : gauge)
        // console.log(String.prototype)

        let date = new Date(0), finalSec = ''
            date.setSeconds(86400)
            setSec = date.toISOString().substr( 11, 8 )
            console.log(setSec)
            
        
}
// window.addEventListener('load', () => {
    humanReadable(5600)
// }) 