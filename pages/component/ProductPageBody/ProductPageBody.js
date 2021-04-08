import React from 'react';
import styles from './ProductPageBody.module.scss'

export default function ProductPageBody() {
  return (
	  <>


		<div id="wrapper">
{/*
	
			<header id="header" className={styles.alt}>
				<a href="index.html" className={styles.logo}><strong>Computer Store</strong> <span>Website</span></a>
				<nav>
					<a href="#menu">Menu</a>
				</nav>
			</header>

	
			<nav id="menu">
				<ul class="links">
					<li class="active"> <a href="index.html">Home </a> </li>

					<li><a href="index.html">Other</a></li>
					<li><a href="about-us.html">About Us</a></li>
					<li><a href="team.html">Team</a></li>
					<li><a href="testimonials.html">Testimonials</a></li>
					<li><a href="faq.html">FAQ</a></li>
					<li><a href="terms.html">Terms</a></li>
					<li><a href="contact.html">Contact Us</a></li>
				</ul>
			</nav>

	*/}	
				<div className={styles.main}>

				
						<div className={styles.one}>
							<div className={styles.inner}>
								<div className={styles.major}>
									<h1>Lorem ipsum dolor sit amet.</h1>
								</div>

								<div className={styles.row}>
									<div className={styles.col_md_5}>
										<img src="images/product-1-720x480.jpg" className={styles.img_responsive} alt=""/>
									</div>

									<div className={styles.col_md_7}>
										<h2><del>$99.00</del> $79.00</h2>

										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, iste neque, ut recusandae quibusdam perferendis qui modi aliquam quaerat molestiae.</p>

										<div className={styles.row}>
											<div className={styles.col_sm_4}>
												  <label className={styles.contro_label}>Extra 1</label>

												  <div className={styles.form_group}>
													<select>
														  <option value="0">Extra 1</option>
														  <option value="1">Extra 2</option>
														  <option value="2">Extra 3</option>
													</select>
												  </div>
											</div>

											<div className={styles.col_sm_8}>
												  <label className={styles.control_label}>Quantity</label>

												  <div className={styles.row}>
													<div className={styles.col_sm_6}>
														  <div className={styles.form_group}>
															<input type="text" name="name" id="name"/>
														  </div>
													</div>

													<div className="col-sm-6">
														  <input type="submit" className={styles.primary} value="Add to Cart"/>
													</div>
												  </div>
											</div>
										</div>
									</div>
								</div>
								
						

								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, soluta, odio. Dicta suscipit sapiente, hic quas, itaque obcaecati possimus reprehenderit excepturi facere quis, molestias ipsum unde. At suscipit, beatae tempora!</p>

								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga numquam voluptas tenetur voluptatum consequatur non officiis, repudiandae laudantium deleniti dolor dignissimos ducimus animi ipsum magni reprehenderit nesciunt dolorem, commodi deserunt architecto ipsa! Eos iusto repellat hic labore magni necessitatibus deserunt reprehenderit ut, fuga voluptatum, possimus fugit dignissimos harum culpa inventore in consequuntur. Reprehenderit fugiat in, molestiae iste. Dicta, optio, pariatur.</p>
								
							</div>
						</div>

				</div>

		
			<footer id="footer">
				<div class="inner">
					<ul class="icons">
						<li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
					</ul>
					<ul className="copyright">
						<li>Copyright © 2020 Company Name - Template by:</li>
				
					</ul>
				</div>
			</footer>

		
		</div>
	
	</>
  );
};
