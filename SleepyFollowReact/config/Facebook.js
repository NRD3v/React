import React, { Component } from 'react'
import { View } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log(result.error)
                                alert("Connexion échouée.")
                            } else if (result.isCancelled) {
                                console.log("Connexion annulée.")
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log(data.accessToken.toString());
                                        Actions.map()
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => {
                        alert("Vous êtes déconnecté.")
                        Actions.home()
                    }}/>
            </View>
        )
    }
}
