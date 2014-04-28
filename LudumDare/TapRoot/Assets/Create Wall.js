#pragma strict



function Start () {
Model.SetActive(false);

}

function Update () {

}


function OnTriggerEnter (other : Collider) {
public GameObject Model;
			Model.SetActive(true);
}