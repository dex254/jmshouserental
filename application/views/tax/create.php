<div class="main-content">

                <div class="page-content">
                    <div class="container-fluid">

                                                    <h5 class="font-size-14 mb-4"><i class="mdi mdi-arrow-right text-primary me-1"></i>Todays activity table</h5>
                                                     <?php echo form_open_multipart('time/store',$attributes); ?>
                                                    <form>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-firstname-input" class="col-sm-3 col-form-label">Product or service</label>
                                                            <div class="col-sm-9">
                                                              <input type="text"  id="name"  name="name"  class="form-control"  placeholder="Enter product or sarvice sold today">
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-email-input" class="col-sm-3 col-form-label">Price</label>
                                                            <div class="col-sm-9">
                                                                <input type="text"  id="amount" name="amount"  class="form-control"  placeholder="price of product or service sold">
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-password-input" class="col-sm-3 col-form-label">Profits</label>
                                                            <div class="col-sm-9">
                                                              <input type="text"  id="size"  name="size" class="form-control"  placeholder="Enteramount in +Ksh">
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-password-input" class="col-sm-3 col-form-label">Losses</label>
                                                            <div class="col-sm-9">
                                                              <input type="text"  id="loss"  name="loss" class="form-control"  placeholder="Enter amount  -Ksh">
                                                            </div>
                                                        </div>

                                                        <div class="row mb-4">
                                                            <label for="horizontal-password-input" class="col-sm-3 col-form-label">Date</label>
                                                            <div class="col-sm-9">
                                                              <input type="date"  id="date"  name="date" class="form-control"  placeholder="Select date  today">
                                                            </div>
                                                        </div>



                                                                <div>
                                                                    <button type="submit" class="btn btn-primary w-md">save</button>
                                                                    <a href="<?php echo base_url('index.php/tax/');?>"><button type="button" class="btn btn-info waves-effect waves-light"><i class="dripicons-view-list"></i>Back</button></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                              <!-- end col -->
                                        </div> <!-- end row -->
                                      </div> <!-- end cardbody -->
                             </div> <!-- end card -->
                         </div> <!-- end col -->
                     </div><!-- end row -->
