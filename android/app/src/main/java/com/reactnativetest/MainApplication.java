package com.reactnativetest;

import android.app.Application;

import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactPackage;
import android.support.annotation.Nullable;

import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }
  @Nullable
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return null;
  }
  @Override
  public String getJSMainModuleName() {
    return "index";
  }
}
