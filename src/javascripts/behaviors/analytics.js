export default function(context) {

	var analyticsSrvc;

	return {
		init: function(){
			analyticsSrvc = context.getService('analytics');
		},
		onclick: function(event, element, elementType){
			analyticsSrvc.userClicked('something');
		}
	}
}
