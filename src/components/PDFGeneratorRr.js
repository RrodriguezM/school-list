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
        fontSize: '14px'
    },

    footer: {
        alignSelf: 'center',
        marginBottom: '20px',
        fontSize: '12px',
    },
    books: {
        alignItems: 'right',
        fontSize: '12px',
        marginLeft: '25px'
    },
    row: {
        marginTop: '12px',
        marginBottom: '12px',
        display: 'flex',
        flexDirection: 'row'
    },
    column: {

        flexBasis: '50%'
    }
});

// Create Document Component
const MyDocument = ({ BasicInfo, BooksInfo, UtilsInfo, NotesInfo }) => {
    // console.log("Info:", BasicInfo);
    console.log("Books:", BooksInfo);

    return < Document >
        <Page size="LETTER" style={styles.page}>
            <View style={styles.section} key="Republic">
                <Text>Republica Bolivariana de Venezuela</Text>
            </View>
            <View style={styles.section} key="Ministry">
                <Text>Ministerio de Educacion Cultura y Deporte</Text>
            </View>
            {Object.entries(BasicInfo).map(([key, value]) => {
                console.log("Value:", value)
                if (value) {
                    return (<View style={styles.section} key={key}>
                        <Text>{value}</Text>
                    </View>)
                } else {
                    return null
                }
            })}
            <View style={styles.row}>
                <View style={styles.column}>
                    {Object.entries(UtilsInfo).map(([key, value]) => {
                        if (value !== "0") {
                            return (<View style={styles.books} key={key}>
                                <Text>{value}-{key}</Text>
                            </View>)
                        } else {
                            return null
                        }
                    })}
                </View>
                <View style={styles.column}>
                    {Object.entries(BooksInfo).map(([key, value]) => {
                        if (value !== "0") {
                            return (<View style={styles.books} key={key}>
                                <Text>{value}-{key}</Text>
                            </View>)
                        } else {
                            return null
                        }
                    })}
                </View>
            </View>
            {Object.entries(NotesInfo).map(([key, value]) => {
                console.log("Value:", value)
                if (value) {
                    return (<View style={styles.section} key={key}>
                        <Text>{value}</Text>
                    </View>)
                } else {
                    return null
                }
            })}

        </Page>
    </Document >
};

export default MyDocument;
