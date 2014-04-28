#pragma strict

public var model : GameObject;

function Start () {
model.SetActive(false);

}

function Update () {

}


function OnTriggerEnter (other : Collider) {
			model.SetActive(true);
}