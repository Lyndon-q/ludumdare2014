#pragma strict

function Start () {

}

function Update () {

}


function OnTriggerEnter (other : Collider) {
			gameObject.SetActive(false);
		Destroy(other.gameObject);
}