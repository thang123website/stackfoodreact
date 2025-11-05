import { initializeApp, getApps, getApp } from 'firebase/app'
import {
    getMessaging,
    getToken,
    onMessage,
    isSupported,
} from 'firebase/messaging'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDDGJ_ETSpgZvX7J-CtaFtQl5ldOhv1_kg",
    authDomain: "lunar-planet-440014-h3.firebaseapp.com",
    projectId: "lunar-planet-440014-h3",
    storageBucket: "lunar-planet-440014-h3.firebasestorage.app",
    messagingSenderId: "936861961273",
    appId: "1:936861961273:web:dd0dcdf6bda7c14cdad1e8",
    measurementId: "G-R2FJPDQ2FB"
}
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const messaging = (async () => {
    try {
        const isSupportedBrowser = await isSupported()
        if (isSupportedBrowser) {
            return getMessaging(firebaseApp)
        }

        return null
    } catch (err) {
        return null
    }
})()

export const fetchToken = async (setFcmToken) => {
    return getToken(await messaging, {
        vapidKey:
            'xq1W8G7Nm51KBapMsmJr4WhyMocXdMuRbWvAK9vLFL8',
    })
        .then((currentToken) => {
            if (currentToken) {
                setFcmToken(currentToken)
            } else {
                setFcmToken()
            }
        })
        .catch((err) => {
            console.error(err)
        })
}

export const onMessageListener = async () =>
    new Promise((resolve) =>
        (async () => {
            const messagingResolve = await messaging
            onMessage(messagingResolve, (payload) => {
                resolve(payload)
            })
        })()
    )
export const auth = getAuth(firebaseApp)
