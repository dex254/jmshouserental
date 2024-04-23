<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class cv extends CI_Controller {

	function __construct()
    {
   	 parent::__construct();
   	 $this->load->helper("url");   //call the form helper
   	 $this->load->helper('form');
  	 $this->load->library('session');
    $this->load->model('','',TRUE);
    $this->session_data = $this->session->userdata('logged_in');

    }
	public function index()
	{
		$ndata['']=$this->session_data;


    $this->load->view('223.png/cv');

	}
}
