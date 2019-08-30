import React, { Component } from 'react';
import cookie from 'react-cookies';
import '../../../styles/LocationPopup.css';

const LangPopup = (data) => (WrappedComponent, changeLangCountry) => {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isDisplay: '',
                selectedLang: '',
                selectedCountry: '',
                store_id: '',
                selectedStoreLocale: '',
                toHome: false,
                changeData: false
            }
            this.changeLangCountry = React.createRef();
        }

        componentDidMount() {

            let isDisplay = cookie.load('displayFlag') === undefined;
            //console.log(cookie.load('displayFlag'))
            if (isDisplay) {
                this.setState({ isDisplay: true });
                document.body.classList.add('apex-no-scroll');
            } else {
                document.body.classList.remove('apex-no-scroll');
                let language = cookie.load('language');
                let country = cookie.load('country');

                this.setState({ selectedLang: language, selectedCountry: country, changeData: true, isDisplay: false });
            }

        }

        onItemClick = (e) => {
            this.setState({ selectedCountry: e.currentTarget.dataset.id });
        }


        handleclick = (el) => {
            const days = 1000 * 60 * 60 * 24 * 14;
            const expires = new Date()
            expires.setDate(Date.now() + days)

            if (this.state.selectedLang && this.state.selectedCountry) {
                document.body.classList.remove('apex-no-scroll');
                this.setState({
                    changeData: true,
                    isDisplay: false,
                    toHome: true
                });

                cookie.save('displayFlag', 'false', { path: '/', expires, maxAge: days })
                localStorage.setItem('toHome', true);
                localStorage.setItem('displayVipReg', true);

                this.changeLangCountry.current.handleLangCountrySelection(this.state.selectedCountry, this.state.selectedLang);
            }

        }


        handleChange = (changeEvent) => {
            this.setState({ selectedLang: changeEvent.target.value });
        }

        render() {

            return (

                <div>
                    <div style={{ display: this.state.isDisplay ? 'block' : 'none' }}>
                        <div tabIndex={-1} role="dialog" className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-dialog--inline ui-draggable ui-resizable" aria-describedby="pref_popup" aria-labelledby="ui-id-1" >
                            <div className="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle" style={{}}>
                                <span id="ui-id-1" className="ui-dialog-title">&nbsp;</span>
                                <button type="button" className="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close">
                                    <span className="ui-button-icon ui-icon ui-icon-closethick" />
                                    <span className="ui-button-icon-space"> </span>Close</button>
                            </div>
                            <div id="pref_popup" className="t-DialogRegion js-modal js-draggable js-resizable js-dialog-autoheight js-dialog-size480x320 js-regionDialog ui-dialog-content ui-widget-content"
                                style={{ backgroundColor: 'rgb(253, 233, 237)', width: 'auto', minHeight: '0px', maxHeight: 'none', height: 'auto' }}>

                                <div className="t-DialogRegion-wrap">
                                    <div className="t-DialogRegion-bodyWrapperOut">
                                        <div className="t-DialogRegion-bodyWrapperIn"><div className="t-DialogRegion-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col col-12 apex-col-auto">
                                                        <div className="t-Region t-Region--removeHeader t-Region--noBorder t-Region--hiddenOverflow" id="R39653411892606074" style={{ backgroundColor: '#fde9ed' }}>
                                                            <div className="t-Region-header">
                                                                <div className="t-Region-headerItems t-Region-headerItems--title">
                                                                    <span className="t-Region-headerIcon"><span className="t-Icon " aria-hidden="true" /></span>
                                                                    <h5 className="t-Region-title" id="R39653411892606074_heading">Country&amp;Language</h5>
                                                                </div>
                                                                <div className="t-Region-headerItems t-Region-headerItems--buttons"><span className="js-maximizeButtonContainer" /></div>
                                                            </div>
                                                            <div className="t-Region-bodyWrap">
                                                                <div className="t-Region-buttons t-Region-buttons--top">
                                                                    <div className="t-Region-buttons-left" />
                                                                    <div className="t-Region-buttons-right" />
                                                                </div>
                                                                <div className="t-Region-body">
                                                                    <h4 style={{ textAlign: 'center', fontWeight: 600 }}>Select your country/اختيار الدولة هنا</h4>
                                                                    <ul className="pflags">
                                                                        <li className={this.state.selectedCountry == 'KSA' ? 'ppopup-textholder active' : 'ppopup-textholder'} id="dislrcsa" data-id='KSA' onClick={this.onItemClick}>
                                                                            <a href="javascript:void(0)" className="pksa pcountry" />
                                                                            <p>السعودية</p>
                                                                            <p>KSA</p>
                                                                        </li>
                                                                        <li className={this.state.selectedCountry == 'UAE' ? 'ppopup-textholder active' : 'ppopup-textholder'} id="dislrcae" data-id='UAE' onClick={this.onItemClick}>
                                                                            <a href="javascript:void(0)" className="puae pcountry" />
                                                                            <p>الامارات</p>
                                                                            <p>UAE</p>
                                                                        </li>
                                                                        <li className={this.state.selectedCountry == 'International' ? 'ppopup-textholder active' : 'ppopup-textholder'} id="enbint" data-id='International' onClick={this.onItemClick}>
                                                                            <a href="javascript:void(0)" className="pinternational pcountry" />
                                                                            <p>دولي</p>
                                                                            <p>International</p>
                                                                        </li>
                                                                    </ul><div className="container">
                                                                        <div className="row">
                                                                            <div className="col col-12 apex-col-auto">
                                                                                <div className="t-Form-fieldContainer t-Form-fieldContainer--floatingLabel t-Form-fieldContainer--stretchInputs t-Form-fieldContainer--radioButtonGroup apex-item-wrapper apex-item-wrapper--radiogroup " id="P0_LANG_CONTAINER">

                                                                                    <label htmlFor="P0_LANG" id="P0_LANG_LABEL" className="t-Form-label" style={{ marginRight: '5%' }}>Select Language / أختيار اللغة </label>

                                                                                    <div className="t-Form-inputContainer"><div className="t-Form-itemWrapper"><div tabIndex={-1} id="P0_LANG" aria-labelledby="P0_LANG_LABEL" className="radio_group apex-item-group apex-item-group--rc apex-item-radio" role="group">
                                                                                        <div className="apex-item-grid radio_group">
                                                                                            <div className="apex-item-grid-row">
                                                                                                <div className="apex-item-option">
                                                                                                    <input type="radio" id="P0_LANG_0" name="P0_LANG" value="en"
                                                                                                        checked={this.state.selectedLang === 'en'}
                                                                                                        onChange={this.handleChange} />
                                                                                                    <label htmlFor="P0_LANG_0">English / الأنجليزية </label>
                                                                                                </div>
                                                                                                <div className="apex-item-option">
                                                                                                    <input type="radio" id="P0_LANG_1" name="P0_LANG" value="ar"
                                                                                                        checked={this.state.selectedLang === 'ar'}
                                                                                                        onChange={this.handleChange} />
                                                                                                    <label htmlFor="P0_LANG_1">Arabic / العربية</label>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    </div><span id="P0_LANG_error_placeholder" className="a-Form-error" data-template-id="33609965712469734_ET" /></div></div>
                                                                            </div>
                                                                        </div><div className="row">
                                                                            <div className="col col-12 apex-col-auto">
                                                                                <button onClick={(e) => this.handleclick(e)} className="t-Button t-Button--hot t-Button--stretch t-Button--gapTop" type="button" id="B33040180548573177"><span className="t-Button-label">Submit / تقديم</span></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="t-Region-buttons t-Region-buttons--bottom">
                                                                    <div className="t-Region-buttons-left" />
                                                                    <div className="t-Region-buttons-right" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></div></div></div>
                                    <div className="t-DialogRegion-buttons">
                                        <div className="t-ButtonRegion t-ButtonRegion--dialogRegion">
                                            <div className="t-ButtonRegion-wrap">
                                                <div className="t-ButtonRegion-col t-ButtonRegion-col--left"><div className="t-ButtonRegion-buttons" /></div>
                                                <div className="t-ButtonRegion-col t-ButtonRegion-col--right"><div className="t-ButtonRegion-buttons" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui-widget-overlay ui-front"></div>
                    </div>
                    <WrappedComponent {...this.props}
                        ref={this.changeLangCountry}
                        selectedLang={this.state.selectedLang}
                        selectedCountry={this.state.selectedCountry}
                        changeData={this.state.changeData}
                        selectedStoreLocale={this.state.selectedStoreLocale}
                        store_id={this.state.store_id}
                        toHome={this.state.toHome}
                        isDisplay={this.state.isDisplay}
                    />
                </div>
            )
        }
    }

}

export default LangPopup;