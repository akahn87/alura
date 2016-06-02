export default function(application) {

	return {
		userClicked(event, element, elementType){
			console.log('Tracked:', event, element, elementType);
		}
	}
}
