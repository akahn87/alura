export default function(context) {

	var analyticsSrvc;

	return {
		onclick: function(event, element, elementType){
			analyticsSrvc.userClicked('something');
		},
		init: function(){
			analyticsSrvc = context.getService('analytics');
		}
	}
}
