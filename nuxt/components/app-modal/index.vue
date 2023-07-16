<template>
  <div
    class="modal fade custom-modal"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modal-body">
          <div class="deal" style="background-image: url('assets/imgs/banner/menu-banner-7.png')">
            <div class="deal-top">
                <h2 class="text-brand">Deal of the Day</h2>
                <h5>Limited quantities.</h5>
            </div>
            <div class="deal-content">
                <h6 class="product-title"><a href="shop-product-right.html">Summer Collection New Morden Design</a></h6>
                <div class="product-price"><span class="new-price">$139.00</span><span class="old-price">$160.99</span></div>
            </div>
            <div class="deal-bottom">
                <p>Hurry Up! Offer End In:</p>
                <div class="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                <a href="shop-grid-right.html" class="btn hover-up">Shop Now <i class="fi-rs-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
if (process.client) {
  onMounted(() => {
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown'); 
        
      $this.countdown(finalDate, function(event) {
        $(this).html(
          event.strftime(''
            + '<span class="countdown-section"><span class="countdown-amount hover-up">%d</span><span class="countdown-period"> days </span></span>'
            + '<span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period"> hours </span></span>'
            + '<span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period"> mins </span></span>'
            + '<span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period"> sec </span></span>'
          )
        );
      });
    });
  })
}
</script>

<style lang="scss">
.deal {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  padding: 50px;
  background-color: #f5f6f9;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 420px;
}

.deal > div {
  width: 100%;
}

.deal h2 {
  color: #ff3551;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.1;
  margin-bottom: 5px;
}

.deal h5 {
  color: #242424;
  font-weight: 400;
  letter-spacing: 0;
  margin-bottom: 20px;
  max-width: 240px;
}

.deal .deal-content {
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
}

.deal .product-title {
  max-width: 240px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.23;
}

.deal .product-title a {
  color: #1a1a1a;
}

.deal .product-price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-flow: wrap;
      flex-flow: wrap;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.25;
  margin-bottom: 20px;
  color: #ff3551;
}

.deal .product-price .new-price {
  font-weight: 400;
  letter-spacing: -.01em;
  margin-right: 10px;
}

.deal .product-price .old-price {
  color: #cccccc;
  text-decoration: line-through;
}

.deal .btn {
  background: none;
  border: 2px solid #088178;
  color: #088178;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 24px;
}

.deal .btn i {
  margin-left: 5px;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  font-size: 12px;
}

.deal .btn:hover i {
  margin-left: 10px;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
}

.deal .deal-bottom {
  -ms-flex-item-align: end;
      align-self: flex-end;
}

.deal .deal-bottom .deals-countdown {
  margin-left: -12px;
  margin-bottom: 20px;
}

.banner-bg {
  background-position: center;
  background-size: cover;
  padding: 50px;
}

.deals-countdown .countdown-section {
  position: relative;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  padding: 20px 5px 15px 5px;
  margin-left: .8rem;
  margin-right: .8rem;
  background-color: #088178;
  border-radius: 4px;
  border: none;
  margin-bottom: 2rem;
}

.deals-countdown .countdown-section .countdown-amount {
  display: inline-block;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  margin-bottom: 15px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.deals-countdown .countdown-section .countdown-period {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  bottom: -20px;
  display: block;
  font-weight: 400;
  color: #90908e;
  text-transform: uppercase;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.deals-countdown .countdown-section:not(:last-child)::after {
  color: #1a1a1a;
  content: ':';
  display: inline-block;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  position: absolute;
  left: 100%;
  margin-left: 12px;
  margin-top: -1px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}

.custom-modal {
  .modal-dialog {
    max-width: 800px !important;
    border-radius: 0px;
    overflow: hidden;
    border: 0;
    margin: auto;
    top: 50%;
    -webkit-transform: translateY(-50%) !important;
            transform: translateY(-50%) !important;
  }

  .modal-dialog .modal-content {
    border-radius: 0;
    padding: 0;
  }

  .modal-dialog .btn-close {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 2;
  }
}

.btn-close {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}

.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}

.btn-close:focus {
  outline: none;
  -webkit-box-shadow: 0 0 0 4px rgba(49, 103, 235, 0.25);
          box-shadow: 0 0 0 4px rgba(49, 103, 235, 0.25);
  opacity: 1;
}

.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  opacity: 0.25;
}
</style>
