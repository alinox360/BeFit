import { useContext, useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';

import Buttons from '../components/UI/Buttons';
import { CaloriesContext } from '../store/calories-context';
import CaloriesForm from '../components/ManageCalories/CaloriesForm';
import { storeCalories } from '../util/http';
function ManageC({ route, navigation }) {

    const caloiresCtx = useContext(CaloriesContext);
    const editedCaloriesId = route.params?.caloriesId;
    const isEditing = !!editedCaloriesId;

    const selectedCalories=caloiresCtx.calories.find((calories )=>calories.id ===editedCaloriesId)
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Calories' : 'Add Calories',
        });

    }, [navigation, isEditing]);

    function deleteCaloriesHnadler() {
        caloiresCtx.deleteCalories(editedCaloriesId);
        navigation.goBack();


    }
    function cancelHandler() {
        navigation.goBack();

    }
    function confirmHandler(caloriesData) {
        if (isEditing) {
            caloiresCtx.addCalories(editedCaloriesId,caloriesData );
        } else {
            storeCalories(caloriesData);
            caloiresCtx.addCalories(caloriesData);
        }
        navigation.goBack();

    }



    return (
        <View style={styles.container}>
            <CaloriesForm
             submitButtonLabel={isEditing ? 'Update' : 'Add'} 
             onSubmit={confirmHandler}
             onCancel={cancelHandler}
             defaultValues={selectedCalories}
             />
           
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500} size={24}
                        onPress={deleteCaloriesHnadler}

                    />
                </View>
            )}

        </View>
    );
}
export default ManageC;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary500

    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopColor: GlobalStyles.colors.primary500,
        borderTopWidth: 2,
        alignItems: 'center'

    }
})
