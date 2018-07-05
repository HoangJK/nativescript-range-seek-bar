import {
    RangeSeekBarBase,
    RangeSeekBarEventData,
    minValueProperty,
    maxValueProperty,
    minStartValueProperty,
    maxStartValueProperty,
    minRangeProperty,
    stepProperty,
    cornerRadiusProperty,
    cornerRadiusCssProperty,
    barHeightProperty,
    barHeightCssProperty,
    barColorProperty,
    barColorCssProperty,
    barHighlightColorProperty,
    barHighlightColorCssProperty,
    thumbColorProperty,
    thumbColorCssProperty,
    leftThumbColorProperty,
    leftThumbColorCssProperty,
    rightThumbColorProperty,
    rightThumbColorCssProperty,
    leftThumbHighlightProperty,
    leftThumbHighlightCssProperty,
    rightThumbHighlightProperty,
    rightThumbHighlightCssProperty,
} from "./nativescript-range-seek-bar.common";
import { Color } from "tns-core-modules/color";

export class RangeSeekBar extends RangeSeekBarBase {
    nativeView: com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar;

    public createNativeView() {
        const crystalRangeSeekBar = new com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar(this._context);
        crystalRangeSeekBar.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.LONG);
        crystalRangeSeekBar.setSteps(1);
        crystalRangeSeekBar.setCornerRadius(20);
        crystalRangeSeekBar.setBarHeight(5).apply();
        crystalRangeSeekBar.setMinStartValue(0).apply();
        crystalRangeSeekBar.setMaxStartValue(0).apply();
        const rangeSeekbarChangeListener = RangeSeekbarChangeListenerImpl.initWithOwner(new WeakRef<RangeSeekBar>(this));
        crystalRangeSeekBar.setOnRangeSeekbarChangeListener(rangeSeekbarChangeListener);
        const rangeSeekbarFinalValueListener = RangeSeekbarFinalValueListenerImpl.initWithOwner(new WeakRef<RangeSeekBar>(this));
        crystalRangeSeekBar.setOnRangeSeekbarFinalValueListener(rangeSeekbarFinalValueListener);
        return crystalRangeSeekBar;
    }

    public [minValueProperty.setNative](value: number) {
        this.nativeView.setMinValue(value);
    }

    public [maxValueProperty.setNative](value: number) {
        this.nativeView.setMaxValue(value);
    }

    public [minStartValueProperty.setNative](value: number) {
        this.nativeView.setMinStartValue(value).apply();
    }

    public [maxStartValueProperty.setNative](value: number) {
        this.nativeView.setMaxStartValue(value).apply();
    }

    public [minRangeProperty.setNative](value: number) {
        this.nativeView.setGap(value);
    }

    public [stepProperty.setNative](value: number) {
        if (Number.isInteger(value)) {
            this.nativeView.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.LONG);
        }
        else {
            this.nativeView.setDataType(com.crystal.crystalrangeseekbar.widgets.CrystalRangeSeekbar.DataType.DOUBLE);
        }
        this.nativeView.setSteps(value);
    }

    public [cornerRadiusProperty.setNative](value: number) {
        this.nativeView.setCornerRadius(value);
    }

    public [cornerRadiusCssProperty.setNative](value: number) {
        this.nativeView.setCornerRadius(value);
    }

    public [barHeightProperty.setNative](value: number) {
        this.nativeView.setBarHeight(value).apply();
    }

    public [barHeightCssProperty.setNative](value: number) {
        this.nativeView.setBarHeight(value).apply();
    }

    public [barColorProperty.setNative](value: Color) {
        this.nativeView.setBarColor(value.android);
    }

    public [barColorCssProperty.setNative](value: Color) {
        this.nativeView.setBarColor(value.android);
    }

    public [barHighlightColorProperty.setNative](value: Color) {
        this.nativeView.setBarHighlightColor(value.android);
    }

    public [barHighlightColorCssProperty.setNative](value: Color) {
        this.nativeView.setBarHighlightColor(value.android);
    }

    public [thumbColorProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
        this.nativeView.setRightThumbColor(value.android);
        this.nativeView.setLeftThumbHighlightColor(value.android);
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [thumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
        this.nativeView.setRightThumbColor(value.android);
        this.nativeView.setLeftThumbHighlightColor(value.android);
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [leftThumbColorProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
    }

    public [leftThumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbColor(value.android);
    }

    public [rightThumbColorProperty.setNative](value: Color) {
        this.nativeView.setRightThumbColor(value.android);
    }

    public [rightThumbColorCssProperty.setNative](value: Color) {
        this.nativeView.setRightThumbColor(value.android);
    }

    public [leftThumbHighlightProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbHighlightColor(value.android);
    }

    public [leftThumbHighlightCssProperty.setNative](value: Color) {
        this.nativeView.setLeftThumbHighlightColor(value.android);
    }

    public [rightThumbHighlightProperty.setNative](value: Color) {
        this.nativeView.setRightThumbHighlightColor(value.android);
    }

    public [rightThumbHighlightCssProperty.setNative](value: Color) {
        this.nativeView.setRightThumbHighlightColor(value.android);
    }
}

@Interfaces([com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener])
export class RangeSeekbarChangeListenerImpl extends java.lang.Object implements com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarChangeListener {
    public owner: WeakRef<RangeSeekBar>;

    public static initWithOwner(owner: WeakRef<RangeSeekBar>): RangeSeekbarChangeListenerImpl {
        let listener = new RangeSeekbarChangeListenerImpl();
        listener.owner = owner;
        return listener;
    }

    public valueChanged(minValue: any, maxValue: any): void {
        if (this.owner && this.owner.get()) {
            let args = {
                eventName: RangeSeekBarBase.rangeSeekBarChangedEvent,
                object: this.owner,
                value: {
                    minValue: minValue,
                    maxValue: maxValue
                }
            } as RangeSeekBarEventData;
            this.owner.get().notify(args);
        }
    }

}

@Interfaces([com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener])
export class RangeSeekbarFinalValueListenerImpl extends java.lang.Object implements com.crystal.crystalrangeseekbar.interfaces.OnRangeSeekbarFinalValueListener {
    public owner: WeakRef<RangeSeekBar>;

    public static initWithOwner(owner: WeakRef<RangeSeekBar>): RangeSeekbarFinalValueListenerImpl {
        let listener = new RangeSeekbarFinalValueListenerImpl();
        listener.owner = owner;
        return listener;
    }

    public finalValue(minValue: any, maxValue: any): void {
        if (this.owner && this.owner.get()) {
            let args = {
                eventName: RangeSeekBarBase.rangeSeekBarFinalValueEvent,
                object: this.owner,
                value: {
                    minValue: minValue,
                    maxValue: maxValue
                }
            } as RangeSeekBarEventData;
            this.owner.get().notify(args);
        }
    }

}
