export class PageSimulation {
    constructor () {
        this.elements = {
            //Locators for page simulation
            
            tabPageSimulation:()=>cy.get('#page-optimizer-url'),
            txtBoxUrl:()=>cy.get('#home_keywordSearch_domain'),
            txtDummyUrl:()=>cy.get('#non_live_url_dropdown'),
            headingUrl:()=>cy.get('#contentSimulation_metaInfo_url_text'),
            headingDummyUrl:()=>cy.contains('Provide following inputs to proceed'),
            lableDummyUrl:()=>cy.contains('contains'),
            hAnalyse:()=>cy.contains('Enter a URL'),
            simPageId:()=>cy.get('#simulator'),
            infoFetching:() =>cy.contains('Fetching data'),
            goButton:()=>cy.get('#home_keywordSearch_submit_button'),
            errMsgMaxKeywordLimit:()=>cy.get('#contentSimulation_multiKeyword_addKeyword_warning_text'),
            errMsgUpdatedKeywordUrl:()=>cy.get('#contentSimulation_multiKeyword_url_dropdown_inputError'),
            errMsgUpdatedLocale:()=>cy.contains('Locale has been updated for the simulation'),
            errMsgEmptyKeywordAdd:()=>cy.contains('Please enter keyword(s) to proceed'),
            errMsgAddDuplicateKeyword:()=>cy.contains('One or more keyword(s) is already present'),
            errMsgKeywordLevelImpact:()=>cy.get('#kw_level_impact_warning_text_text'),
            errMsgRunSimWithOutChanges:()=>cy.get('#WARNING_toast_message'),
            errMsgEmptyKeywordAddNew:()=>cy.get('#contentSimulation_multiKeyword_addKeyword_warning_text'),
            errMsgNoRefDomainPopUp:()=>cy.get('span#sim_sub_cat_param_content_page-e-a-t-signals_accordion_body_acc_param_title_refdomains_count_error #undefined_text'),
            errMsgNumBacklink:()=>cy.get('span#sim_sub_cat_param_content_page-e-a-t-signals_accordion_body_acc_param_title_backlink_count_error #undefined_text'),
            errMsgInputKeywordViewData:()=>cy.contains('Input keywords to view this data'),
            successMsgSimCompleted:()=>cy.contains('SUCCESS_toast_message'),
            errMsgEmptyInvalidUrl:()=>cy.get('div#contentSimulation_multiKeyword_url_dropdown_inputError'),
            errMsgUpdatedUrl:()=>cy.contains('As the URL has been updated, the scores might be impacted'),
            errMgsDummyUrlReq:()=>cy.contains('* A URL (Suggested) is required to run simulation'),
            selectorLocaleDdn:()=>cy.get('#contentSimulation_multiKeyword_locale_dropdown_button'),
            loaderIcon:()=>cy.get('#contentSimulation_multiKeyword_spinner'),
            originalContentPopUp:()=>cy.contains('Original Source'),
            txtAddKeyword:()=>cy.get('#contentSimulation_multiKeyword_keyword'),
            txtAddLocale:()=>cy.contains('SelectContainer'),
            txtContentUrlBox:()=>cy.get('#content-editor_urlField_input'),
            allLocale:()=>cy.get('##react-select-protocol-option-0'),
            popUpYes:()=>cy.contains('YES'),
            pageSimHeading:()=>cy.contains('Page Optimizer'),
            tabOptimization:()=>cy.contains('OPTIMIZATION'),
            headingSimulationHistory:()=> cy.get('#simulation-history-heading'),
            submit:()=>cy.get('#contentSimulation_multiKeyword_submit_button'),
            removeAll:()=>cy.get('#contentSimulation_multiKeyword_removeAllKeywords_button'),
            originalContentClose:()=>cy.get('#sim_editor_view_original_modal-head-button'),
            simEditorRunSimPopup:()=>cy.get('#sim_editor_run_simulator_alert_close'),
            simResetSimPopup:()=>cy.get('#sim_editor_reset_alert_close'),
            ddnAddKeywordUrl:()=>cy.get('#contentSimulation_multiKeyword_url_dropdown'),
            buttonIDNotHaveLiveUrl:()=>cy.contains('I don’t have a live page/URL'),
            buttonDummyUrlSubmit:()=>cy.get('#_submit_button'),
            buttonAddKeyword:()=>cy.get('#contentSimulation_multiKeyword_addKeyword_button'),
            buttonDownloadPageSim:()=>cy.get('#catDashboardDowload_button'),
            rdbIHaveLiveUrl:()=>cy.get('#kw_url_selection_i-have-a-live-url'),
            rdbIDoNotHaveLiveUrl:()=>cy.get('#kw_url_selection_i-dont-have-a-live-url'),
            valueFetcher:()=>cy.get('#kw_url_selection_i-have-a-live-url'),
            valueFetcherDonotHaveLiveUrl:()=>cy.get('#kw_url_selection_i-dont-have-a-live-url'),
            iDoNotHaveUrlPopUpClose:()=>cy.get('#undefined_alert_close'),
            emptyUrlNotifyIcon:()=>cy.get('#content-editor_urlField_label'),
            protocolSelectionPageOptPage:()=>cy.get('#serpResult_keywordSearch_protocol_dropdown'),
            versionSelectionDropdown:()=>cy.get('#sim_version_list_dropdown'),
            firstVersionOption:()=>cy.get('#react-select-3-option-1'),
            secondVersionOption:()=>cy.get('#react-select-3-option-2'),
            thirdVersionOption:()=>cy.get('#react-select-3-option-3'),
            versionChangePopUp:()=>cy.get('#version_consnt_alert_footer_yes_button_button'),
            versionChangePopUpText:()=>cy.get('#version_consnt_alert_title'),
            versionSelected:()=>cy.get('#version_selected'),
            simulationHistoryHeading:()=>cy.get('#simulation-history-heading'),
            simHistoryUrl:()=>cy.get('#simulation-history-URL'),
            simHistoryDescription:()=>cy.get('#simulation-history-description'),
            simHistoryType:()=>cy.get('#simulation-history-type'),
            simBodyCreatedBy:()=>cy.get('#simulation-body-createdby_0'),
            simBodyCreatedDate:()=>cy.get('#simulation-body-createddate_0'),
            simBodyModifiedBy:()=>cy.get('#simulation-body-modifiedby_0'),
            simBodyModified_date:()=>cy.get('#simulation-body-modifieddate_0'),
            simBodyKeyword:()=>cy.get('#simulation-body-keyword_0'),
            simExpandModeHistoryRecord:()=>cy.get('#simulation-header-accordian-arrow_0'),
            simUrlInsideHistoryRecord:()=>cy.get('#simulation-header-url_0'),
            simTypeInsideHistoryRecord:()=>cy.get('#simulation-header-type_0'),
            simHistoryRecordDesc:()=>cy.get('#simulation-header-description_0'),
            simHistPagination:()=>cy.get('#simulation-history-pagination'),
            simHistPageNumber:()=>cy.get('#simulation-history-pageNumber'),
            simHistPageNumContainer:()=>cy.get('#pagination-number-container'),
            historyUrlSearchBox:()=>cy.get('#searchBox'),
            editorDisplayHeading:()=>cy.contains('The editor displays only the page'),
            historyRecordView:()=>cy.get('#simulation-header-view_0'),
            iconClkDiscEditor:()=>cy.get('#edit_description_button'),
            descTextArea:()=>cy.get('#description_textArea'),
            descText:()=>cy.get('#description_text'),
            descEditorSave:()=>cy.get('#save_description_modal_button'),
            descEditorCancel:()=>cy.get('#cancel_description_modal_button'),
            historyTooltipDesc:()=>cy.get('#description_label_tooltip_text'),
            historyNoRecordFound:()=>cy.contains('No matching results found for search'),
            olderVersionNotification:()=>cy.get('#version_notification_message'),
            olderVersionCloseBtn:()=>cy.get('#notification_close_icon'),
            liveFlowMessage:()=>cy.contains('The journey has been updated as live URL journey'),
            nonLiveFlowMessage:() => cy.contains('The journey has been updated as Non live URL journey'),
            projectRelateKeywords:()=> cy.get('#kw_url_tag_toggle'),
            headingKwRankAndPerf : () => cy.contains('Keyword Rank & Perfomance'),
            headingKwGapAnalysis : () => cy.contains('Keyword Gap Analysis'),
            headingContentSim : () => cy.contains('Content Simulation'),
            headingContGapAnalysis : () => cy.contains('Content Gap Analysis'),
            headingBlAnalysis : () => cy.contains('Backlink Analysis'),
            headingTechAudit : () => cy.contains('Technical Audit'),
            errorMsgForInvalidUrl :() => cy.contains('Please enter a valid URL'),
            authTab:()=> cy.get('#sim_left_pane_Authority_tab_title'),
            technicalTab:() => cy.get('#sim_left_pane_Technical_tab_title_score_label'),
            toggleButton :() => cy.get('#contentSimulation_multiKeyword_accordionToggle_button'),
            filterHighInTechParameter :() => cy.get('#sim_sub_cat_param_filter_high_checkbox'),
            filterLowIntechParameter :() => cy.get ('#sim_sub_cat_param_filter_very-low_checkbox'),
            sortDropdownBox:() =>cy.get('#sim_sub_cat_param_filter_sort_dropdown'),
            errorNotificationForEmptyKWSim : () => cy.get('#contentSimulation_multiKeyword_addKeyword_error'),
            kwListInSimPage :() => cy.get('*[class^="sc-eXfwOT"]'),
            tabInputKeywords : () => cy.contains('Input Keywords'),
            tabProjectKeyword : () => cy.contains('Project Keywords'),
            searchVolume : () => cy.contains('Search Volume'),
            selectAllFromProKW : () => cy.get('#kw_url_project_filter_select_all'),
            totalNumberOfKW :() => cy.get('#phillContainer'),
            notificationMessageForLocaleUpdate :() => cy.get('#contentSimulation_multiKeyword_localeChange_warning_text'),
            textBoxToUpdateLocaleInSim : () => cy.get('#react-select-protocol-input'),
            slectNewLocale : () => cy.get('#react-select-protocol-option-1'),
            NotifyMsgForEmptyKWProceed : () => cy.get('#contentSimulation_multiKeyword_addKeyword_error'),
            ThemeInSimulation : () => cy.get('#kw_url_theme_title'),
            NoTheme : () => cy.contains('No Theme'),
            FileUpload : () => cy.get('#file_upload_button'),
            BrowserButton : () => cy.get('#FileUpload'),
            getTextBrowser : () => cy.contains('Browse').contains('.html'),
            contentScoreValue : () => cy.get('#sim_left_pane_Content_tab_title_score_value-hyphen'),
            howEditorWords : () => cy.contains('How the editor works'),
            NoKeywordsFound: () => cy.get('#kw_url_filter_no_keywords') 


        }
    }
}

export const OptimizationPage = new PageSimulation()