<!doctype html>
<html lang="en">


<!-- Mirrored from themesdesign.in/lexa-ajax/layouts/red/pages-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 12 Jun 2022 18:19:37 GMT -->
<head>

        <meta charset="utf-8" />
        <title>Ace shops</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesdesign" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="<?php echo base_url("assets/images/favicon.ico");?>">

        <!-- Bootstrap Css -->
        <link href="<?php echo base_url("assets/css/bootstrap.min.css");?>" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="<?php echo base_url("assets/css/icons.min.css");?>" rel="stylesheet" type="text/css" />
        <!-- App Css-->
        <link href="<?php echo base_url("assets/css/app.min.css");?>" id="app-style" rel="stylesheet" type="text/css" />

    </head>

    <body>
        <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="card-body pt-0">

                                <h3 class="text-center mt-5 mb-4">
                                    <a href="<?php echo base_url("index.html");?>" class="d-block auth-logo">
                                        <h2>Ace</h2>
                                    </a>
                                </h3>

                                <div class="p-3">
                                    <h4 class="text-muted font-size-18 mb-1 text-center">Welcome  to Ace </h4>
                                    <p class="text-muted text-center">Sign in to continue  </p>
                                      <?php echo form_open_multipart('login/verify',$attributes); ?>
                                      <?php if(!empty($this->session->flashdata('message'))){?>
                                        <div class="alert alert-<?php echo $this->session->flashdata('type');?>" role="alert">
                                               <strong>Having truble?!!!!</strong>    if  need an account  or Forgot your password contact Eriko 0706416969 the Ace owner  and the systems admin.
                                           </div>

                                            <?php echo $this->session->flashdata('message');?>
                                             <?php }?>
                                    <form class="form-horizontal mt-4" action="https://themesdesign.in/lexa-ajax/layouts/red/index.html">
                                        <div class="mb-3">
                                            <label for="username">Username</label>
                                            <input type="text" class="form-control" id="username"  name="username" placeholder="Enter username">
                                        </div>
                                        <div class="mb-3">
                                            <label for="userpassword">Password</label>
                                            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password">
                                        </div>
                                        <div class="mb-3 row mt-4">
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="customControlInline">
                                                    <label class="form-check-label" for="customControlInline">Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6 text-end">
                                                <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 row">
                                            <div class="col-12 mt-4">
                                                <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password?</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            <p>Don't have an account ? <a href="<?php echo base_url('register.php');?>" class="text-primary"> Signup Now </a></p>
                            © <script>document.write(new Date().getFullYear())</script> Dex <span class="d-none d-sm-inline-block"> - Crafted with <i class="mdi mdi-heart text-danger"></i> by Dennis.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- JAVASCRIPT -->
        <script src="<?php echo base_url("assets/libs/jquery/jquery.min.js");?>"></script>
        <script src="<?php echo base_url("assets/libs/bootstrap/js/bootstrap.bundle.min.js");?>"></script>
        <script src="<?php echo base_url("assets/libs/metismenu/metisMenu.min.js");?>"></script>
        <script src="<?php echo base_url("assets/libs/simplebar/simplebar.min.js");?>"></script>
        <script src="<?php echo base_url("assets/libs/node-waves/waves.min.js");?>"></script>
        <script src="<?php echo base_url("assets/libs/jquery-sparkline/jquery.sparkline.min.js");?>"></script>
        <!-- App js -->
        <script src="<?php echo base_url("assets/js/app.js");?>"></script>
    </body>


<!-- Mirrored from themesdesign.in/lexa-ajax/layouts/red/pages-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 12 Jun 2022 18:19:37 GMT -->
</html>
