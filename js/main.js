let product = "Socks";

let app = new Vue({
    el: '#app',
    data: {
    product: "Socks",
    brand: 'Vue Mastery',
    selectedVariant: 0,
    
    altText: "A pair of socks",
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    inStock(){
        return this.variants[this.selectedVariant].variantQuantity
    },
    inventory: 0,
    onSale: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
        {
        variantId: 2234,
        variantColor: 'green'
        },
        {
        variantId: 2235,
        variantColor: 'blue'
        }
        ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0,
    variants: [
        {
        variantId: 2234,
        variantColor: 'green',
        variantImage: "./assets/vmSocks-green-onWhite.jpg",
        variantQuantity: 10
        },
        {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: "./assets/vmSocks-blue-onWhite.jpg",
        variantQuantity: 0
        }
        ],
        updateProduct(variantImage) {
            this.image = variantImage
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        }
    },
    methods: {
        addToCart() {
        this.cart += 1
        },
        MinusToCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
        return this.brand + ' ' + this.product;
        }
    },
    
    
})

let app2 = new Vue({
    el: '#app2',
    data: {
        description: "A pair of warm, fuzzy socks"
    }
})