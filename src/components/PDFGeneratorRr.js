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

    },
    footer: {
        alignSelf: 'center',
        marginBottom: '20px'
    },
    books: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }

});

// Create Document Component
const MyDocument = ({ BasicInfo }) => {
    console.log("Info:", BasicInfo);
    return < Document >
        <Page size="LETTER" style={styles.page}>
            <View style={styles.section} key="Repubic">
                <Text>Republica Bolivariana de Venezuela</Text>
            </View>
            <View style={styles.section} key="Ministry">
                <Text>Ministerio de Educacion Cultura y Deporte</Text>
            </View>
            {BasicInfo.map((item) => {
                return (<View style={styles.books} key={item}>
                    <Text>{item}</Text>
                </View>)
            })}
            <View style={styles.footer} key="footer">
                <Text>Nota: Todos los Utiles deben estar debidamente <br />
                     identificados</Text>
            </View>

        </Page>
    </Document >
};

export default MyDocument;
