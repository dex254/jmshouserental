


<div class="main-content">

               <div class="page-content">
                   <div class="container-fluid">

                       <!-- start page title -->

                       <!-- end page title -->



                                       <h4 class="card-title">Todays</h4>
                                       <a href="<?php echo base_url('index.php/tax/create/');?>"><button type="button" class="btn btn-outline-secondary waves-effect">Todays work add</button></a>
                                       <p class="card-title-desc">Records of your dayly progress is here  you can get upto date by addning above
                                       </p>

                                       <div class="table-responsive">
                                           <table class="table mb-0">
                                             <thead>
                                               <thead>
                                                 <tr>
                                                     <th>@</th>
                                                     <th>Product or sarvice</th>
                                                     <th>Prices</th>
                                                     <th>Profits</th>
                                                     <th>Losses</th>
                                                     <th>Date</th>

                                                     <th>Action</th>
                                                 </tr>
                                               </thead>
                                               <tbody>
                                               <?php $i=1; foreach ($tax as $contact): ?>
                                               <tr>
                                               <td><?php echo $i; $i++;?></td>
                                               <td><?php echo $contact['name'];?></td>
                                               <td><?php echo $contact['amount'];?></td>
                                               <td><?php echo $contact['size'];?></td>
                                               <td><?php echo $contact['loss'];?></td>
                                               <td><?php echo $contact['date'];?></td>
                                               <td>
                                               <a href="<?php echo base_url('index.php/tax/view/'.$contact['id']);?>"><button type="button" class="btn btn-primary btn-sm"><i class="fa fa-eye"></i> View</button></a>
                                               </td>
                                               </tr>
                                               <?php endforeach ?>
                                               </tbody>
                                           </table>


                         </div>
                      <!-- end row -->

                  </div> <!-- container-fluid -->
              </div>

              <!-- End Page-content -->
