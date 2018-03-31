package com.reactnativetest;

//import android.app.Application;
//
//import com.reactnativenavigation.NavigationApplication;
//import com.facebook.react.ReactPackage;
//import android.support.annotation.Nullable;
//import com.facebook.react.shell.MainReactPackage;
//import io.realm.react.RealmReactPackage;
//import com.facebook.soloader.SoLoader;
//import com.facebook.react.ReactApplication;
//
//import java.util.Arrays;
//import java.util.List;
//
//public class MainApplication extends NavigationApplication implements ReactApplication {
//
//  @Override
//  public boolean isDebug() {
//    return BuildConfig.DEBUG;
//  }
//  @Nullable
//  @Override
//  public List<ReactPackage> createAdditionalReactPackages() {
//    return null;
//  }
//  @Override
//  public String getJSMainModuleName() {
//    return "index";
//  }
//  @Override
//  public List<ReactPackage> getPackages() {
//    return Arrays.<ReactPackage>asList(
//      new MainReactPackage(),
//      new RealmReactPackage()
//    );
//  }
//  @Override
//  public void onCreate() {
//    super.onCreate();
//    SoLoader.init(this, /* native exopackage */ false);
//  }
//}

import com.facebook.react.ReactPackage;
import io.realm.react.RealmReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
      new RealmReactPackage()
    );
  }
  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
      new RealmReactPackage()
    );
  }
  @Override
  public String getJSMainModuleName() {
    return "index";
  }
}