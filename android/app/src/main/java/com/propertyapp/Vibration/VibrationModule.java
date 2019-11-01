package com.propertyapp.Vibration;

import android.os.Vibrator;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class VibrationModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    VibrationModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "VibrationExample";
    }

    @ReactMethod
    public void vibrate() {
        Vibrator v = (Vibrator) reactContext.getSystemService(reactContext.VIBRATOR_SERVICE);
        v.vibrate(25);
    }
}