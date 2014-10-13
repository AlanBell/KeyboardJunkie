<?php

class KeyboardJunkie
{
    protected $tabId = 0;
    protected $headerScriptLinkType = 'HEADERSCRIPT';

        /**
         * Invoked when special actions are performed on the module.
         * @param String Module name
         * @param String Event Type (module.postinstall, module.disabled, module.enabled, module.preuninstall)
         */
        function vtlib_handler($module_name, $event_type)
        {
        global $log;
        $log->fatal('responding to event');
                if($event_type == 'module.postinstall')
                {
                       $this->addLinksForKeyboardJunkie();

                }
                else if($event_type == 'module.disabled')
                {
                       $this->removeLinksForKeyboardJunkie();

                }
                else if($event_type == 'module.enabled')
                {
                       $this->addLinksForKeyboardJunkie();
                }
                else if($event_type == 'module.preuninstall')
                {
                       $this->removeLinksForKeyboardJunkie();

                }
                else if($event_type == 'module.preupdate')
                {

                }
                else if($event_type == 'module.postupdate')
                {

                }
        }

     function addLinksForKeyboardJunkie() {
	global $log;
        $log->fatal('adding keyboard links');

        Vtiger_Link::addLink($this->tabId, $this->headerScriptLinkType, 'Mousetrap', 'modules/KeyboardJunkie/resources/mousetrap/mousetrap.min.js','','','');
        Vtiger_Link::addLink($this->tabId, $this->headerScriptLinkType, 'Mousetrap Global Bind', 'modules/KeyboardJunkie/resources/mousetrap/plugins/global-bind/mousetrap-global-bind.min.js','','','');
        Vtiger_Link::addLink($this->tabId, $this->headerScriptLinkType, 'Keyboard Shortcuts', 'modules/KeyboardJunkie/resources/shortcuts.js','','','');
    }

    function removeLinksForKeyboardJunkie() {
        //Deleting Headerscripts links
	global $log;
        $log->fatal('removing keyboard links');
        Vtiger_Link::deleteLink($this->tabId, $this->headerScriptLinkType, 'Mousetrap', 'modules/KeyboardJunkie/resources/mousetrap/mousetrap.min.js');
        Vtiger_Link::deleteLink($this->tabId, $this->headerScriptLinkType, 'Mousetrap Global Bind', 'modules/KeyboardJunkie/resources/mousetrap/plugins/global-bind/mousetrap-global-bind.min.js');
        Vtiger_Link::deleteLink($this->tabId, $this->headerScriptLinkType, 'Keyboard Shortcuts','modules/KeyboardJunkie/resources/shortcuts.js');
        }

}

?>

