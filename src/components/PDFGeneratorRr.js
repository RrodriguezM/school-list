import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        margin: 10,
    },
    section: {
        textAlign: 'center',
    }
});

// Create Document Component
const MyDocument = ({ info }) => {
    console.log("Info:", info);
    return < Document >
        <Page size="LETTER" style={styles.page}>
            {info.map((item) => {
                return (<View style={styles.section} key={item}>
                    <Text>{item}</Text>
                </View>)
            })}
            {/* <View style={styles.section}>
                <Text>Section #2</Text>
            </View> */}
        </Page>
    </Document >
};

export default MyDocument;
