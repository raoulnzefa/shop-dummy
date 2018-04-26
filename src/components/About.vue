<template>
    <div class="main">
        <div class="container">
            <h1 class="text-center">A little about us</h1>
            <p>
                Over Armour began with a mission to outfit the world's greatest with the equipment that they need to become the best. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Recusandae sed eius repudiandae culpa ut nisi maiores, molestias obcaecati illo eos? Labore omnis placeat nisi quod tenetur architecto
                eveniet eaque voluptatem!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam laboriosam consequatur! Cupiditate in quis, animi repellendus magni delectus
                maxime iusto nihil ut quidem obcaecati, qui nostrum repudiandae iure eum!
            </p>
        </div>
        <div class="row justify-content-center">
            <div class="col offset-xl-4 offset-lg-3 offset-md-2">
                <button class="btn btn-lg"><i class="fab fa-instagram"></i>Instagram</button>
                <button class="btn btn-lg"><i class="fab fa-facebook"></i>Facebook</button>
                <button class="btn btn-lg"><i class="fab fa-twitter"></i>Twitter</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main {
        border-top: 1px solid black;
        background-color: #dedede;
        padding: 40px;
        font-size: 1.25rem;
    }

    button {
        margin: 5px;
        color: #777;
        transition: 0.4s;
    }

    button:hover {
        background-color: #cdcdcd;
    }

    i.fab {
        margin: 2px 6px;
    }
</style>


