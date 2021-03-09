import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { ScrollView, Text } from 'react-native';

class Home extends Component {  
    constructor(props) {
        super(props);
        };

        static navigationOptions = {
            title: 'Contact Us'
        }
    

    render() {
        return (
         <ScrollView>
             <Card 
             featuredTitle="Contact Information"
             wrapperStyle={{margin: 20}}
             >
                 <Text
                 wrapperStyle={{marginBottom: 20}}>
                 1 Nucamp Way
                            Seattle, WA 98001
                            U.S.A.

                            Phone: 1-206-555-1234
                            Email: campsites@nucamp.co  
                 </Text>
             </Card>
         </ScrollView>
        );
    }
}

export default Home;